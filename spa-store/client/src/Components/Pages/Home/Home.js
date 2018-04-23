import React, {Component} from "react";
import "./Home.css";
import Header from '../../Header/Header';
import Featured from '../../Feature/Feature';
import homeImage from "../../../assets/Images/homeImage.jpg";
import img from '../../../assets/Images/reactBP.png';
import classes from './Home.css';
import API from "../../../utils/API";

class Home extends Component {

    state = {
        items: [],
        loading: true,
        featured: {}
    }

    componentDidMount() {
        this.loadFeatured();
    }
    
    loadFeatured(){
        API.searchFeatured()
           .then(res => {

               const fetched = [];
               for(let key in res.data){
                   fetched.push({
                       ...res.data[key],
                       id: key
                   });
               }

               this.setState({
                   loading: false,
                   items: fetched
               });

           }).catch(err => {
               this.setState({loading: false});
           });
    }

    loadItem(id){
        API.searchItem(id)
           .then(res => {
                this.setState({
                    featured: res.data
                });
           }).catch(err => {
               this.setState({loading: false});
           })
    }

    render(){    
        return(
            <div className={classes.mainBox}>
                <Header 
                image={homeImage}
                title='Home Page Store'/>
                    <h1 className={classes.FeaturedTitle}>Featured Items</h1>
                <div className={classes.FeatureBox}>
                
                    <Featured
                        item1={img}
                        ItemTitle='Item # 1'
                        price='4.20'/>
                    <Featured
                        item1={img}
                        ItemTitle='Item # 2'
                        price='4.20' />
                    <Featured
                        item1={img}
                        ItemTitle='Item # 3'
                        price='4.20' />
                    </div>    
                </div>
        );
    }
}
export default Home;
