import { Grid } from "../../components/Grid/Grid"
import { GridItem } from "../../components/Grid/GridItem"
import { ContentHeader } from "../../components/Layout/Admin/ContentHeader/ContentHeader"
import { Icon } from "../../components/UI/Icon/Icon"
import { InfoWidget } from "../../components/UI/Widget/Info/InfoWidget"

export const Home = () => {
  const widgets = [
    {
      icon: <Icon className="icon-truck" size={4} />,
      count: 1000,
      name: 'Кол-во заказов',
      gradient: {
        from: '#3f5efb',
        to: '#fc466b'
      }
    },
    {
      icon: <Icon className="icon-shopping-cart" size={4} />,
      count: 10,
      name: 'Новых заказов',
      gradient: {
        from: '#11998e',
        to: '#38ef7d'
      }
    },
    {
      icon: <Icon className="icon-t-shirt" size={4} />,
      count: 3000,
      name: 'Кол-во товаров',
      gradient: {
        from: '#ee0979',
        to: '#ff6a00'
      }
    }
  ];

  return (
    <>
      <ContentHeader title="Главная" />
      <section>
        <Grid>
          {widgets.map((widget, i) => {
            return (
              <GridItem width={25} key={i}>
                <InfoWidget
                  icon={widget.icon}
                  count={widget.count}
                  name={widget.name}
                  gradient={widget.gradient}
                />
              </GridItem>
            )
          })}
        </Grid>
      </section>
    </>
  )
}

