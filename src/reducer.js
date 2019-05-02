let initialState = {
    name: "",
    number: "",
    isAppointment: false
}

let reducer = (state = initialState, action) => {
    let {type, name, number} = action;
    if (type === "ADD") {
        return {
            ...state,
            name: name,
            number: number,
            isAppointment: true
        }
    } 
}

export default reducer;