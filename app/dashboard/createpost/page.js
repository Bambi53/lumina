    "use client"
import { TextField } from "@mui/material";
import { useFormik, validateYupSchema } from "formik";
import * as Yup from "yup"

const schema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    body: Yup.string().required("Title"),

    validationSchema:schema    
})


export default function createpost () {
    const {handleSubmit, handleChange, handleBlur, values, erros, touched} = useFormik({
        initialValues:{title:", body:"},
        onSubmit: ()=> {},
        validationSchema:schema
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
                </form>
            </div>
        </main>
    )
}