using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace XmlHttp
{
    public partial class data : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Request.HttpMethod == "POST")
            {
                Response.Write("POST : Chaîne de caractères en provenance du serveur !");
            }
            if (Request.HttpMethod == "GET")
            {
                Response.Write("GET : Chaîne de caractères en provenance du serveur !");
            }
        }
    }
}