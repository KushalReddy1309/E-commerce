import StripeCheckout from "react-stripe-checkout"
import {useState,useEffect} from "react"
import axios from "axios"

const KEY = "pk_test_51Lg91uSERVNsXlaUXPGZTMoNQG4Vw6qHAjLW7x9QuU8lhVGKkQ6DyiLx9r5htuwjOUIre51OJWSD9Y3eUf2eFoPz00U2fyWlJG"

const Pay = () =>{

    const [stripeToken,setStripeToken] = useState(null)
    
    const onToken = (token) =>{
        setStripeToken(token);
    }
    useEffect(()=>{
        const makeRequest = async() =>{
            try{
                const res = await axios.post("http://localhost:5000/api/checkout/payment",{
                    tokenId:stripeToken.id,
                    amunt:2000,
                })
                console.log(res.data)
            }catch(err){
                console.log(err)
            }
        }
        stripeToken && makeRequest
    },[stripeToken])


    return (
        <div
            style = {{
                height:"100vh",
                display:"flex",
                alignments:"center",
                justifyContent:"center",
            }}
        >
            <StripeCheckout name="Komal Shop" billingAddress
            shippingAddress
            description = "Your total is $20"
            amount = {2000}
            token ={onToken}
            stripeKey = {KEY}
            >
                <button>
                    style = {{
                        border : "none",
                        width:120,
                        borderRadius:5,
                        padding:"20px",
                        backgroundColor:"black",
                        color:"white",
                        fontWeight:"600",
                        cursor:"pointer",
                    }}
                    Pay Now
                </button>
            </StripeCheckout>
            </div>
    );
}