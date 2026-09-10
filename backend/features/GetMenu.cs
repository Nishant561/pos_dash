using Carter;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
namespace features;


public class Result<T>
{
    public bool IsSuccess { get; }

    public T? Data { get; }

    public string? ErrorMessage { get; }

    public string? StatusCode { get; }

    private Result(bool isSuccess, T? data, string? errorMessage, string? statusCode)
    {
        IsSuccess = isSuccess;
        Data = data;
        ErrorMessage = errorMessage;
        StatusCode = statusCode;
    }

    public static Result<T> Success(T data) => new(true, data, null, null);

    public static Result<T> Failure(string errorMessage, string? statusCode = "400") => new(false, default, errorMessage, statusCode);
}


public class MenuResponse
{
    public int MenuID { get; set; }

    public string? MenuTitle { get; set; }

    public string? MenuLink { get; set; }
}

public static class GetMenuHandler
{
    
        public static async Task<Result<MenuResponse>> HandleGetMenu()
    {
        var menu = new MenuResponse
        {
            MenuID = 0,
            MenuTitle = "Menu Title",
            MenuLink = "/link-one"
        };
        
        return Result<MenuResponse>.Success(menu);
    }
}

public static class ResultExtension{






public class GetMenu : ICarterModule
{
    public void AddRoutes(IEndpointRouteBuilder app)
    {
        app.MapGet("/menu", () => new { message = "Menu items" });
    }
}
