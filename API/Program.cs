using API.Data;
using API.Interfaces;
using API.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.EntityFrameworkCore;
using System.Text;
using API.Extensions;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

/* builder services for AddDbContext, AddCors, AddScoped are moved to ApplicationServiceExtension in Extensions folder */

builder.Services.AddApplicationServices(builder.Configuration);//extension of AddApplicationService

/* builder services for Identity and Authorization is moved to IDentityServiceExtensions in Extensions folder */

builder.Services.AddIdentityServices(builder.Configuration); //extension of IdentityServiceExtensions

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle

//builder.Services.AddEndpointsApiExplorer();
//builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseCors(builder => builder.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:4200"));
//if (app.Environment.IsDevelopment())
//{
//    app.UseSwagger();
//    app.UseSwaggerUI();
//}

//app.UseHttpsRedirection();

app.UseAuthentication(); //asks for valid token
app.UseAuthorization(); //asks about certain permits/access

app.MapControllers();

app.Run();
