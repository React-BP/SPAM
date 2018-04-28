import React, {Component} from "react";
import "./Home.css";
import Header from '../../Header/Header';
import Featured from '../../Feature/Feature';
import Footer from '../../Footer/Footer';
import homeImage from "../../../Assets/Images/homeImage.jpg";
import classes from './Home.css';
import Modal from "../../UI/Modal/modal";
import SingleItem from '../../UI/SingleItem/SingleItem';
import API from "../../../utils/API";

class Home extends Component {

    state = {
        items: [],
        loading: true,
        featured: {},
        itemModal:false,
        cart: {}
    }

    componentDidMount() {
        this.loadFeatured();
        this.loadCart('USER ID');
    }

    modalHandler = (id) => {
        API.searchItem(id)
            .then(res => {
                this.setState({
                    featured: res.data
                });

                this.setState({ itemModal: true });
            }).catch(err => {
                this.setState({ loading: false });
            });
    }

    modalCancelHandler = () => {
        this.setState({ itemModal: false });
    }

    orderHandler = (id) => {

        if (this.state.cart.length === 0) {

            const toAdd = [];
            toAdd.push(this.state.featured);

            const order = {
                user: id,
                items: toAdd,
                totalPrice: this.state.featured.price,
                paid: false
            }

            API.createOrder(id, order.toString())
                .then((res) => {
                    this.setState({
                        cart: res.data,
                        itemModal: false
                    });
                });
        }
        else {

            const cart = this.state.cart.items;
            cart.push(this.state.featured);
            API.updateOrder(id, this.state.cart.toString())
                .then((res) => {
                    this.setState({
                        cart: res.data,
                        itemModal: false
                    });
                });
        }
    }
    
    loadFeatured(){
        API.searchFeatured()
           .then(res => {
               console.log('res is: ', res.data);
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

              // console.log("items is: ", this.state.items);

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

    loadCart(userID) {
        API.searchOrder(userID)
            .then(res => {
                this.setState({
                    cart: res.data
                });
                console.log('HERE cart is: ', this.state.cart);
            }).catch(err => {
                this.setState({
                    cart: {}
                });
                console.log('cart is: ', this.state.cart);
            });

    }

    render(){    
        
        return(
            <div className={classes.mainBox}>
                <Header 
                image={homeImage}
                title='Home Page Store'/>
                    <p className={classes.FeaturedTitle}>Featured Items</p>
                <div className={classes.FeatureBox}>
                    {this.state.items.map(item => (                  

                        <Featured
                            key={item.id}
                            item1={item.image}
                            ItemTitle={item.name}
                            price={item.price}
                            brand={item.brand}
                            gender={item.gender}
                            click={() => this.modalHandler(item._id)}
                        />
                    ))}
                    <Modal show={this.state.itemModal}
                        modalClosed={this.modalCancelHandler}>
                        <SingleItem singleItemPic={this.state.featured.image}
                            singlePicInfo={this.state.featured.name}
                            singleItemName={this.state.featured.name}
                            singleItemBrand={this.state.featured.brand}
                            singleItemPrice={this.state.featured.price}
                            sizes={this.state.featured.sizes} 
                            orderHandler={this.state.featured._id}/>
                    </Modal>
                </div>
                <Footer/>

            </div>
        );
    }
}
export default Home;
