import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",
})

const sendEmail = async (data) => {
    console.log("Sending email with data:", data);
    try {
        const response = await api.post("/emails/send", data);
        return response.data;
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
}

const emailsLatest = async () => {
    try {
        const response = await api.get("/emails/latest");
        return response.data;
    } catch (error) {
        console.error("Error fetching emails:", error);
        throw error;
    }
}

const fetchEmailById = async (id) => {
    try {
        const response = await api.get(`/imap-emails/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching email by ID:", error);
        throw error;
    }
}

const fetchEmails = async () => {
    try {
        const response = await api.get("/imap-emails/");
        console.log("Fetched emails:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching emails:", error);
        throw error;
    }
}

export { sendEmail, emailsLatest, fetchEmailById, fetchEmails };