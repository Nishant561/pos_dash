using Microsoft.AspNetCore.Http;

public static class ResultExtension{

    public static IResult ToHttpResult<T>(this Result<T> result)
    {
        if (result.IsSuccess)
        {
            return Results.Ok(result.Data);
        }
        else
        {
            return Results.Problem(result.ErrorMessage, statusCode: int.Parse(result.StatusCode ?? "400"));
        }
    }

}
