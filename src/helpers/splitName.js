const splitName = (text = "") => {
    const [firstname, ...others] = text.split(" "); 

    return [firstname, others.join(" ")];
} 

export default splitName;
