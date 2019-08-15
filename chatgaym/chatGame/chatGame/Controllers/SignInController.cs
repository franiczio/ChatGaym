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


        [HttpGet("sendData")]
        public ActionResult<List<String>> SendDatabaseContent()
        {
            dbCon.DatabaseName = "chat_base";
            dbCon.Connect();
            myStringList=getDBContent();
            AddMessageToDB("add");
            return Ok(myStringList);
        }

        [HttpGet]
        public ActionResult<List<String>> ResponseTest()
        {
            dbCon.DatabaseName = "chat_base";
            dbCon.Connect();

            return Ok();
          
        }

        [HttpPost]
        public ActionResult UpdateChatList()
        {
            
            return Ok("postResponse");
        }

        public List<string> getDBContent()
        {
            List<string> newMessages = new List<string>();
            string result = string.Empty;
            string query = "SELECT Content FROM messages";
            var cmd = new MySqlCommand(query, dbCon.Connection);
            var reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                
                string someStringFromColumnZero = reader.GetString(0);
                newMessages.Add(someStringFromColumnZero);
                
            }
            reader.Close();
            return newMessages;
        }

        public void AddMessageToDB(string Message)
        {
            MySqlCommand newCommand = dbCon.Connection.CreateCommand();
            newCommand.CommandText = "INSERT INTO messages VALUES (@message, @firstId, @secondId)";
            newCommand.Parameters.AddWithValue("@message", "hello1");
            newCommand.Parameters.AddWithValue("@firstId", 0);
            newCommand.Parameters.AddWithValue("@secondId", 0);
            newCommand.ExecuteNonQuery();
            
        }
    }
}