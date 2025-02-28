    "use client"
import { CircularProgress, TextField } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { useFormik } from "formik";
import * as Yup from "yup"
import { db } from "@config/firebase.config";
import { useState } from "react";

const schema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    body: Yup.string().required("Title"),
  
})


export default function createPost ({userId}) {
    const [opsProgress, setOpsProgress] = useState(false);
    const {handleSubmit, handleChange, handleBlur, values, erros, touched} = useFormik({
        initialValues:{title:"", body:""},
        onSubmit: async()=> {
            setOpsProgress(true);
            await addDoc(collection(db, "post"),{
                user: userId,
                title:values.title,
                body:values.body,
                timecreated: new Date().getTime()
            }).then(() =>{
                setOpsProgress(false);
                alert("you have sucessfully submitted your post")
            })
            .catch(e =>{
                setOpsProgress(false);
                console.error(e);
                alert("you have encountered an unknown error")
            })
        },
        validationSchema:schema,
    })
       
    return(
        <main className="min-h-screen flex justify-center py-4 md:py-6 px-4 md:px-6 lg:px-16 gb-gray-100">
            <div className="w-full md:w-[380px] flex flex-col gap-4 border border-gray-200 bg-gray-50 rounded-md p-2 md:pb-6">
                <h1 className="text-center text-2xl text-green-500">Create your Blog post</h1>
                <form onSubmit={handleSubmit} className="flex flex gap-3">
                    <div className="flex flex-col">
                        <label>Title</label>
                        <TextField
                        id="title"
                        type="text"
                        variant="outlined"
                        placeholder="title..."
                        className="w-full"
                        value={values.title}
                        onChange={handleChange}
                        onBlur={handleBlur}/>
                        {touched.title && erros.title ? <span className="text-red-500">{erros.body}</span>:null}
                    </div>
                    <div>
                        <label>Body</label>
                        <TextField
                        multiline
                        rows={7}
                        id="body"
                        type="text"
                        variant="outlined"
                        placeholder="body..."
                        className="w-full"
                        value={values.body}
                        onChange={handleChange}
                        onBlur={handleBlur}/>
                         {touched.title && erros.title ? <span className="text-red-500">{erros.body}</span>:null}
                    </div>
                    <button type="submit" className="bg-green-600 w-full h-[40px]">Submit post</button>
                    <CircularProgress style={{display:!opsProgress ? "none": "flex" }}/>
                </form>
            </div>
        </main>
    )
}