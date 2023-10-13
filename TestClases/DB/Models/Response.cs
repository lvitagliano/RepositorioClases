using System.Text.Json;

namespace TestClases.DB.Models
{
    public class Response
    {
        public int StatusCode { get; set; }
        public string? Message { get; set; }
        public override string ToString() => JsonSerializer.Serialize(this);
    }
}
