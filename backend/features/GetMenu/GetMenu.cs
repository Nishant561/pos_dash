
using System.Data;
using Carter;
using Dapper;
namespace features;


#region handler
public class GetMenuHandler
{
   private readonly IDbConnection _dbConnection;

    public GetMenuHandler(IDbConnection dbConnection)
    {
        _dbConnection = dbConnection;
    }

    public async Task<Result<List<MenuResponse>>> HandleGetMenu()
    {
        var sql = "SELECT * FROM Menu";
        var menu = await _dbConnection.QueryAsync<MenuResponse>(sql);

        return Result<List<MenuResponse>>.Success(menu.ToList());
    }
}
#endregion


#region Endpoint
public class GetMenu : ICarterModule
{
    public void AddRoutes(IEndpointRouteBuilder app)
    {
        app.MapGet("/menu", async (GetMenuHandler handler) =>
        {
            var result = await handler.HandleGetMenu();
            return result.ToHttpResult();
        });
    }
};

#endregion