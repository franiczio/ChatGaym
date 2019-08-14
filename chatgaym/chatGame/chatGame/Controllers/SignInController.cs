using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using chatGame.DB;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;

namespace chatGame.Controllers
{
    [Route("/api/[controller]")]
    [ApiController]
    public class SignInController : ControllerBase
    { 
        private DBConnection dbCon = DBConnection.Instance();
        private List<String> myStringList = new List<string>();
        

        [HttpGet]
        public ActionResult<List<String>> ResponseTest()
        {
            dbCon.DatabaseName = "chat_base";
            dbCon.Connect();


                
            



            //            string querry = "INSERT INTO users(nick,password) VALUES(?nick, ?password);";
            //            using (MySqlCommand command = new MySqlCommand(querry, dbCon.Connection))
            //            {
            //                command.Parameters.Add("?nick", MySqlDbType.VarChar).Value = "kuba";
            //                command.Parameters.Add("?password", MySqlDbType.VarChar).Value = "dyja";
            //                command.ExecuteNonQuery();
            //                dbCon.Close();
            //            }

            DateTime data = DateTime.Now;
            Console.WriteLine("responseTest");
            string tryy = "{\"invoked\": \"asd\"}";
            myStringList.Add(this.getDBContent());
            myStringList.Add("ab");
            myStringList.Add("cd");
            myStringList.Add("ef");
            myStringList.Add("gh");
            myStringList.Add("ij");
            myStringList.Add(new String("kl"));
            myStringList.Add(data.ToString());
            myStringList.Add("----");
            myStringList.Add(myStringList.Count.ToString());
            return Ok(myStringList);
            //return Ok();
        }

        [HttpPost]
        public ActionResult UpdateChatList()
        {
            
            return Ok("postResponse");
        }

        public string getDBContent()
        {
            string result = string.Empty;
            string query = "SELECT nick,password FROM users";
            var cmd = new MySqlCommand(query, dbCon.Connection);
            var reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                string someStringFromColumnZero = reader.GetString(0);
                string someStringFromColumnOne = reader.GetString(1);
                result = someStringFromColumnZero + "," + someStringFromColumnOne;
                
            }
            reader.Close();
            return result;
        }
    }
}