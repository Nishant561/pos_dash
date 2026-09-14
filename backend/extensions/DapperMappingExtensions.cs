
using Dapper.FluentMap;
public static class DapperMappingExtensions
{
    public static void ConfigureDapperMapping()
    {
        FluentMapper.Initialize(config =>
        {
            config.AddMap(new MenuResponseMap());
        });
    }
}