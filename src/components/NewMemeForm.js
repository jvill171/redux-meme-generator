import React, {useState} from "react";
import { v4 as uuid } from 'uuid';

import "./NewMemeForm.css";

const DEFAULT_FORM = {
    url:"",
    topText: "",
    bottomText: "",
}

const NewMemeForm = ({addMeme})=>{
    const [form, setForm] = useState(DEFAULT_FORM);

    const handleSubmit = (e)=>{
        e.preventDefault();
        addMeme({ ...form, id: uuid() });
        setForm( DEFAULT_FORM );
    }

    const handleChange = (e)=>{
        const { name, value } = e.target;
        setForm(f => ({ ...f, [name]: value }));
    }

    return(
        <div>
            <h2>Make a New Meme</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="url">Image URL</label>
                <input
                    type="text"
                    name="url"
                    id="form_url"
                    onChange={handleChange}
                    value={form.url}
                />
                <label htmlFor="url">Top Text</label>
                <input
                    type="text"
                    name="topText"
                    id="form_topText"
                    onChange={handleChange}
                    value={form.topText}
                />
                <label htmlFor="url">Bottom Text</label>
                <input
                    type="text"
                    name="bottomText"
                    id="form_bottomText"
                    onChange={handleChange}
                    value={form.bottomText}
                />
                <button type="submit" id="form_submit">
                    Generate Meme!
                </button>
            </form>
        </div>
    );
}

export default NewMemeForm;