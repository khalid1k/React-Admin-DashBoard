import { barChartBoxVisit,barChartBoxRevenue, chartBoxUser } from "../../data";
import TopBox from "../../components/Topbox/topBox";
import ChartBox from "../../components/chartBox/chartBox";
import { chartBoxProduct } from "../../data";
import { chartBoxRevenue } from "../../data";
import { chartBoxConversion } from "../../data";
import "./home.scss";
import BarChartBox from "../../components/BarChartBox/barChartBox";
import PieChartBox from "../../components/pieChartBox/pieChartBox";
import BigChartBox from "../../components/BigChartBox/BigChartBox";
const Home=()=>{
    return(
        <div className="home">
            <div className="box box1"><TopBox /></div>
            <div className="box box2"><ChartBox {...chartBoxUser}/></div>
            <div className="box box3"><ChartBox {...chartBoxProduct}/></div>
            <div className="box box4"><PieChartBox/></div>
            <div className="box box5"><ChartBox {...chartBoxConversion}/></div>
            <div className="box box6"><ChartBox {...chartBoxRevenue}/></div>
            <div className="box box7"><BigChartBox/></div>
            <div className="box box8"><BarChartBox {...barChartBoxVisit}/></div>
            <div className="box box9"><BarChartBox {...barChartBoxRevenue}/></div>
        </div>
    )
}
export default Home;