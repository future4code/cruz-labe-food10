import React from 'react'
import { HistoryCards,
    HistoryRestaurantTitle,
    HistoryDateTitle,
    HistoryTotalTitle
} from './styled'


const OrderHistoryCards = (props) => {

    const date = new Date(props.created)
    const options = {year: 'numeric', month: 'long', day: 'numeric'}
    
    return (
        <div>
            <HistoryCards>
                <HistoryRestaurantTitle>{props.restaurant}</HistoryRestaurantTitle>
                <HistoryDateTitle>{date.toLocaleString('pt-BR', options)}</HistoryDateTitle>
                <HistoryTotalTitle>SUBTOTAL R${props.total}</HistoryTotalTitle>
            </HistoryCards>
        </div>
    )
}

export default OrderHistoryCards
