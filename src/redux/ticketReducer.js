import { ADD_TICKET, CHANGE_AMOUNT_TICKET, DELETE_TICKET } from "./action/type";

const initialState = {
  ticketBooking: [],
};

export const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TICKET:
      if (action.data) {
        let listTicket = state.ticketBooking;
        let index = listTicket.findIndex((item) => {
          return item.idTicket === action.data.idTicket;
        });
        if (index !== -1) {
          listTicket[index].count++;
        } else {
          listTicket.push(action.data);
        }
        [...state.ticketBooking] = listTicket;
        return { ...state };
      } else {
        [...state.ticketBooking] = [];
        return { ...state };
      }
    case DELETE_TICKET:
      let index2 = state.ticketBooking.findIndex((item) => {
        return item.idTicket === action.data;
      });

      if (index2 !== -1) {
        state.ticketBooking.splice(index2, 1);
      }
      [...state.ticketBooking] = state.ticketBooking;
      return { ...state };
    case CHANGE_AMOUNT_TICKET:
      let index3 = state.ticketBooking.findIndex((item) => {
        return item.idTicket === action.data.id;
      });
      if (index3 !== -1) {
        if (action.data.flag) {
          state.ticketBooking[index3].count++;
        } else {
          state.ticketBooking[index3].count > 1
            ? state.ticketBooking[index3].count--
            : alert("không giảm nữa!");
        }
      }
      [...state.ticketBooking] = state.ticketBooking;
      return { ...state };
    default:
      return state;
  }
};
