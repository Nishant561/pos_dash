using System.Data;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;

public static class DbConnection
{
    
    public static IServiceCollection AddDbConnection(this IServiceCollection service, IConfiguration configuration)
    {
        service.AddDbContext<PosDbContext>(options =>
        {
            options.UseSqlServer(configuration.GetConnectionString("DefaultConnection"));
        });

        return service;
    }

    public static IServiceCollection AddIdbConnection (this IServiceCollection service, IConfiguration configuration)
    {
        service.AddScoped<IDbConnection>(sp => new SqlConnection(configuration.GetConnectionString("DefaultConnection")));

        return service;
    }
    
}