import axios from 'axios';
import React from 'react'

const EmailRestApi = () => {
    {/*noemailer*/ }
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const serviceId = 'service_xh061gn';
        const templateId = 'template_jx3aw0d';
        const publickey = '5DGV-D1rfgZA3Bc5T';

        const data = {
            service_Id: serviceId,
            template_Id: templateId,
            user_id: publickey,
            template_params: {
                from_name: name,
                from_email: email,
                to_name: 'Web Wizard',
                message: message,
            }

        };

        try {
            const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
            console.log(res.data);
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error(error);
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/*name value*/}
                <input name="name" type="text"
                    className="feedback-input" value={name}
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)} />
                {/*email value*/}
                <input name="email" type="text"
                    className="feedback-input" value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)} />
                {/*message box*/}
                <textarea name="text"
                    className="feedback-input" value={message}
                    placeholder="Comment"
                    onChange={(e) => setMessage(e.target.value)}></textarea>
                {/*sumbit button*/}
                <input type="submit" value="SUBMIT" />
            </form>
        </div>
    )
}

export default EmailRestApi