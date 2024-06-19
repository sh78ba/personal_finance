

const GetDate = () => {
  
    const today = new Date();
        const day=today.getDay();
        const dayname=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${dayname[day]}  ${date}-${month}-${year}`;

}

export default GetDate