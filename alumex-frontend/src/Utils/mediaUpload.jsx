import { createClient } from "@supabase/supabase-js";

let url = "https://zjgvimokyggfdgoednaj.supabase.co/rest/v1/";
let key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqZ3ZpbW9reWdnZmRnb2VkbmFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc1MDE1MTMsImV4cCI6MjEwMzA3NzUxM30.eui4YC_q1do2H8mgWTiunsWyrIexEOjI1aMxw806Kf8";

const supabase = createClient(url, key);

export default function uploadMedia(file) {
    return new Promise((resolve, reject) => {

        if (file == null) {
            reject("No file selected");
        } else {

            const timeStamp = new Date().getTime();
            const fileName = timeStamp + "_" + file.name;

            supabase.storage.from("Aluimages").upload(fileName, file, {
                upsert: false,
                cacheControl: "3600"
            }).then(() => {

                const publicUrl = supabase.storage
                    .from("Aluimages")
                    .getPublicUrl(fileName)
                    .data.publicUrl;

                resolve(publicUrl);

            }).catch((error) => {
                reject(error);
            });

        }
    });
}