import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import uploadMedia from "../Utils/mediaUpload";

// let API_URL = "https://zjgvimokyggfdgoednaj.supabase.co/rest/v1/";
// let anon_public = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqZ3ZpbW9reWdnZmRnb2VkbmFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc1MDE1MTMsImV4cCI6MjEwMzA3NzUxM30.eui4YC_q1do2H8mgWTiunsWyrIexEOjI1aMxw806Kf8";

// const supabase = createClient(API_URL, anon_public);

export default function TestPage() {

    const [file, setfile] = useState(null);

    async function handleUpload() {

        try {
            const url = await uploadMedia(file);
            console.log(url);
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div>

            <input
                onChange={(e) => {
                    setfile(e.target.files[0]);
                }}
                type="file"
            />

            <button onClick={handleUpload} className="">
                Upload
            </button>

        </div>
    );
}