

using Dapper.FluentMap.Mapping;

public class MenuResponseMap : EntityMap<MenuResponse>
{
    public MenuResponseMap()
    {
        Map(m => m.MenuTitle).ToColumn("MenuName");
        Map(m => m.MenuLink).ToColumn("MenuPath");
    }
}