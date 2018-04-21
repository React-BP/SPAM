import React, {Component} from "react";
import "./Home.css";
import Header from '../../Header/Header';
import Featured from '../../Feature/Feature';
import homeImage from "../../../Assets/Images/homeImage.jpg";
import img from '../../../Assets/Images/reactBP.png';
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

               console.log("items is: ", this.state.items);

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
                    {this.state.items.map(item => (
                        <Featured
                            item1={item.image}
                            ItemTitle={item.title}
                            price={item.price}/>
                    ))}
                </div>    
                </div>
        );
    }
}
export default Home;
