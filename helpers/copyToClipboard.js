export default function copyToClipboard(data) {
  const textarea = document.createElement('textarea');
  textarea.style.position = 'absolute';
  textarea.style.left = '-9999px';
  textarea.style.top = '-9999px';
  textarea.value = data;
  document.body.appendChild(textarea);
  const selection = document.getSelection();

  textarea.select();
  document.execCommand('copy');
  selection.removeAllRanges();
  document.body.removeChild(textarea);
}
