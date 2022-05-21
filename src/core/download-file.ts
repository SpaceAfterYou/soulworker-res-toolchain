export function downloadFile(data: string, fileName: string) {
  const csvData = data;
  const blob = new Blob([csvData], { type: "application/csv;charset=utf-16;" });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.style.visibility = "hidden";
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
