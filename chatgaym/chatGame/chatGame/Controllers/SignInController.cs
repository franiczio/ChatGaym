using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using chatGame.DB;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using Newtonsoft.Json;
using Org.BouncyCastle.Math;

namespace chatGame.Controllers
{
    [Route("/api/[controller]")]
    [ApiController]
    public class SignInController : ControllerBase
    { 
        private DBConnection dbCon = new DBConnection("chat_base");
        private DBConnection dbConInsert = new DBConnection("chat_base");
        private List<String> myStringList = new List<string>();

        [HttpPost("sendData")]
        public ActionResult<List<String>> SendDatabaseContent()
        {
            var reader = new StreamReader(Request.Body);
            var body = reader.ReadToEnd();
            long lastMessageTime = long.Parse(body);
            myStringList =getDBContent(lastMessageTime);
            return Ok(myStringList);
        }

        [HttpPost("getData")]
        public async void SendNewMessageToDataBase()
        {
            var reader = new StreamReader(Request.Body);
            var body = reader.ReadToEnd();
            var bodyDictionary = JsonConvert.DeserializeObject<Dictionary<string, string>>(body);
            var bodyKeys = bodyDictionary.Keys.ToArray();
            var contentKey = bodyKeys[0];
            var timeKey = bodyKeys[1];
            var idKey = bodyKeys[2];
            string content = bodyDictionary[contentKey];
            int id = Int32.Parse(bodyDictionary[idKey]);
            long time = long.Parse(bodyDictionary[timeKey]);
            AddMessageToDB(content,id,time);
        }

        [HttpGet]
        public ActionResult<List<String>> ResponseTest()
        {
                dbCon.Connect();
                dbConInsert.Connect();
            return Ok();
        }

        [HttpPost]
        public ActionResult UpdateChatList()
        {
            
            return Ok("postResponse");
        }

        public List<string> getDBContent(long lastMessageTime)
        {
            dbCon.Connect();
            List<string> newMessages = new List<string>();
            string result = string.Empty;
            string query = "SELECT Content FROM messages WHERE time>" + lastMessageTime;
            var cmd = new MySqlCommand(query, dbCon.Connection);
            using (var reader = cmd.ExecuteReader())
            {
                while (reader.Read())
                {

                    string someStringFromColumnZero = reader.GetString(0);
                    newMessages.Add(someStringFromColumnZero);
                }
                reader.Close();
            }
            dbCon.Close();
            return newMessages;
        }

        public void AddMessageToDB(string message,int id, long time)
        {
            dbConInsert.Connect();

            MySqlCommand newCommand = new MySqlCommand();
            newCommand = dbConInsert.Connection.CreateCommand();
            newCommand.CommandText = "INSERT INTO messages VALUES (@message, @firstId, @secondId, @time)";
            newCommand.Parameters.AddWithValue("@message", message);
            newCommand.Parameters.AddWithValue("@firstId", id);
            newCommand.Parameters.AddWithValue("@secondId", 0);
            newCommand.Parameters.AddWithValue("@time", time);

            newCommand.ExecuteNonQuery();
            dbConInsert.Close();
            
        }
    }
}