const reducer = (state=[],action)=> {
	// console.log(action);

	// let {type,payload} = action;

	// return payload;
	let {type,payload} = action;

	switch(type){
		case "CHANGE_LIST":
			return [...state,...payload]
		default:
			return state;
	}
	return state;
}

const reducer2 =(state=[],action)=>{

	let {type,payload} = action;

	switch(type){
		case "CHANGE_LISTB":
			return [...state,...payload]
		default:
			return state;
	}
	
	return state; //默认状态值;
}
const reducer3 =(state=true,action)=>{
	
	let {type,payload} = action;
	

	switch(type){
		case "CHANGE_SHOW":
			return payload
		default:
			return state;
	}
	return state; //默认状态值;
}

const reducer4 =(state=true,action)=>{
	
	let {type,payload} = action;
	

	switch(type){
		case "CHANGE_SHOWB":
			return payload
		default:
			return state;
	}
	return state; //默认状态值;
}


const reducer5 =(state=true,action)=>{
	
	let {type,payload} = action;
	

	switch(type){
		case "CHANGE_ISSHOW":
			return payload
		default:
			return state;
	}
	return state; //默认状态值;
}

export {reducer,reducer2,reducer3,reducer4,reducer5}