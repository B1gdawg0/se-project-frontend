function TextFieldWithLabel(props){
    return (
        <div className="flex flex-col gap-3 mx-10">
            <p className="text-black text-4xl font-bold">{props.label}</p>
            <input type="text" placeholder={props.placeholder} className="border-2 border-black rounded-md px-4 py-1 text-4xl"></input>
        </div>
    );
}

export default TextFieldWithLabel