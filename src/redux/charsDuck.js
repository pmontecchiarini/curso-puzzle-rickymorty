import axios from 'axios';

//constants
let initialData = {
    fetching: false,
    array: [],
    current: {}
}

let URL = "https://rickandmortyapi.com/api/character"

let GET_CHARACTERS = "GET_CHARACTERS"
let GET_CHARACTER_SUCCESS = "GET_CHARACTER_SUCCESS"
let GET_CHARACTER_ERROR = "GET_CHARACTER_ERROR"

let REMOVE_CHARACTER =  "REMOVE_CHARACTER"

//reducer
export default function reducer ( state = initialData, action){
    switch(action.type){
        case REMOVE_CHARACTER:
            return { ...state, array: action.payload}
        case GET_CHARACTERS:
            return { ...state, fetching: true}
        case GET_CHARACTER_SUCCESS:
            return {...state, array: action.payload, fetching: false}
        case GET_CHARACTER_ERROR:
            return {...state, fetching: false, error: action.payload }
        default:
            return state
    }
}

//action (thunks)
export let removeCharacterAction = () => (dispatch, getState) => {
    let {array} = getState().characters
    array.shift()
    dispatch({ 
        type: REMOVE_CHARACTER,
        payload: [...array]
    })
}


export let getCharactersAction = () => (dispatch, getState) => {

    dispatch({
        type: GET_CHARACTERS
    })

    return axios.get(URL)
        .then( res => {
            dispatch({
                type: GET_CHARACTER_SUCCESS,
                payload: res.data.results
            })
        })
        .catch( err => {
            console.log(err)
            dispatch({
                type: GET_CHARACTER_ERROR,
                payload: err.response.message
            })
        }

        )
}