


using features;

public static class AllService
{
    
    public static IServiceCollection AddAllServices(this IServiceCollection services)
    {
        services.AddScoped<GetMenuHandler>();
        return services;
    }

}