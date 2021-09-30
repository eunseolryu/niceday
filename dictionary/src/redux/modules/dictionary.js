// dictionary.js

// Actions
const CREATE = 'dictionary/CREATE';  //1. 생성해준다

const initialState = {  //2. 초기 상태값(기본값) 만들어준다.
    list: [],
};

//3. 액션을 만들어줄 함수
export const createDictionary = (dictionary) => {
    return { type: CREATE, dictionary }
};



//4. Reducer 새 데이터를 리턴해주는 리듀서.... 뭔소리냐..ㅠ
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "dictionary/CREATE": {
            const new_dictionary_list = [...state.list, action.dictionary];
            console.log(123, new_dictionary_list)
            return { list: new_dictionary_list };
        }
        default:
            return state;
    }
}