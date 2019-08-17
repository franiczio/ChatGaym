using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MySql.Data;
using MySql.Data.MySqlClient;

namespace chatGame.DB
{
    public class DBConnection
    {
//        public DBConnection()
//        {
//        }
        private string databaseName = string.Empty;
//        public string DatabaseName
//        {
//            get { return databaseName; }
//            set { databaseName = value; }
//        }
        
        public string Password { get; set; }

        private MySqlConnection connection = null;
        public MySqlConnection Connection
        {
            get { return connection; }
        }

        private DBConnection instance = null;

        public DBConnection(string databaseName)
        {
            this.databaseName = databaseName;
        }

        public void Connect()
        {
            if (Connection == null)
            {
                String connstring = string.Format("Server=localhost; database={0}; UID=root; password=", databaseName);
                connection = new MySqlConnection(connstring);
                connection.Open();
            }
        }
        public void Close()
        {
           connection.Close();
        }
    }
}
