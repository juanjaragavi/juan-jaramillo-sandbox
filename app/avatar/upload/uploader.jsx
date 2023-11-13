'use client';

import { useState, useRef } from 'react';

export default function AvatarUploadPage() {
    const inputFileRef = useRef(null);
    const [blob, setBlob] = useState(null);
    return (
    <>
    <h1>Upload Your Avatar</h1>

    <form
        onSubmit={async (event) => {
            event.preventDefault();
            const formData = new FormData();
            formData.append('file', inputFileRef.current.files[0]);
            const response = await fetch('/api/avatar', {
                method: 'POST',
                body: formData,
            });
            const blob = await response.json();
            setBlob(blob);
        }}
    >
        <input name="file" ref={inputFileRef} type="file" required />
        <button type="submit">Upload</button>
    </form>
    {blob && (
    <div>
        Blob url: <a href={blob.url}>{blob.url}</a>
    </div>
    )}
</>
);
}