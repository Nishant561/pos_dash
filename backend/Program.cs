
using Carter;
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCarter();


var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.UseHttpsRedirection();
app.MapCarter();



app.Run();
