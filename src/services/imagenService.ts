export async function subirImagen(file: File) {
  const cloudName = import.meta.env.VITE_CLOUDE_NAME;
  const uploadPreset = import.meta.env.VITE_PRESET;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.error?.message || "Error al subir imagen");
  return data.secure_url;
}
