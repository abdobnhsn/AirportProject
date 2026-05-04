FROM nginx:alpine
# نسخ ملفات مشروع مطار صفاقس إلى مجلد Nginx الافتراضي
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]