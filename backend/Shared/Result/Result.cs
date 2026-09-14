


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