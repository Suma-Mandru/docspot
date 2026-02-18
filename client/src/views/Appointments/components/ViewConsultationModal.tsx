import React from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Box,
    Typography,
    IconButton,
    CircularProgress,
} from "@mui/material";
import { IoClose, IoDocument } from "react-icons/io5";
import { useGetConsultationDataQuery } from "../../../redux/api/doctorSlice";

interface ViewConsultationModalProps {
    open: boolean;
    onClose: () => void;
    appointmentId: string;
    doctorName: string;
}

const ViewConsultationModal: React.FC<ViewConsultationModalProps> = ({
    open,
    onClose,
    appointmentId,
    doctorName,
}) => {
    const { data: consultationData, isLoading } = useGetConsultationDataQuery(
        { appointmentId },
        { skip: !appointmentId }
    );

    const handleDownloadPdf = (record: any) => {
        const link = document.createElement("a");
        link.href = record.fileData;
        link.download = record.fileName;
        link.click();
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="md"
            fullWidth
            PaperProps={{
                sx: {
                    borderRadius: "16px",
                    background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
                },
            }}
        >
            <DialogTitle
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    color: "#fff",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "600",
                }}
            >
                <Typography variant="h6" sx={{ fontFamily: "'Poppins', sans-serif" }}>
                    Consultation from {doctorName}
                </Typography>
                <IconButton onClick={onClose} sx={{ color: "#fff" }}>
                    <IoClose />
                </IconButton>
            </DialogTitle>

            <DialogContent sx={{ padding: "24px", marginTop: "16px" }}>
                {isLoading ? (
                    <Box sx={{ display: "flex", justifyContent: "center", padding: "40px" }}>
                        <CircularProgress />
                    </Box>
                ) : (
                    <>
                        {consultationData?.data?.consultationNotes ||
                            consultationData?.data?.prescription ||
                            (consultationData?.data?.medicalRecords && consultationData.data.medicalRecords.length > 0) ? (
                            <>
                                {consultationData?.data?.consultationNotes && (
                                    <Box sx={{ marginBottom: "20px" }}>
                                        <Typography
                                            sx={{
                                                marginBottom: "8px",
                                                color: "#2d3748",
                                                fontFamily: "'Poppins', sans-serif",
                                                fontWeight: "600",
                                                fontSize: "16px",
                                            }}
                                        >
                                            Consultation Notes
                                        </Typography>
                                        <Box
                                            sx={{
                                                padding: "16px",
                                                backgroundColor: "#fff",
                                                borderRadius: "8px",
                                                border: "1px solid #e2e8f0",
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontFamily: "'Poppins', sans-serif",
                                                    fontSize: "14px",
                                                    color: "#4a5568",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                {consultationData.data.consultationNotes}
                                            </Typography>
                                        </Box>
                                    </Box>
                                )}

                                {consultationData?.data?.prescription && (
                                    <Box sx={{ marginBottom: "20px" }}>
                                        <Typography
                                            sx={{
                                                marginBottom: "8px",
                                                color: "#2d3748",
                                                fontFamily: "'Poppins', sans-serif",
                                                fontWeight: "600",
                                                fontSize: "16px",
                                            }}
                                        >
                                            Prescription
                                        </Typography>
                                        <Box
                                            sx={{
                                                padding: "16px",
                                                backgroundColor: "#fff",
                                                borderRadius: "8px",
                                                border: "1px solid #e2e8f0",
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontFamily: "'Poppins', sans-serif",
                                                    fontSize: "14px",
                                                    color: "#4a5568",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                {consultationData.data.prescription}
                                            </Typography>
                                        </Box>
                                    </Box>
                                )}

                                {consultationData?.data?.medicalRecords &&
                                    consultationData.data.medicalRecords.length > 0 && (
                                        <Box sx={{ marginTop: "20px" }}>
                                            <Typography
                                                sx={{
                                                    marginBottom: "12px",
                                                    color: "#2d3748",
                                                    fontFamily: "'Poppins', sans-serif",
                                                    fontWeight: "600",
                                                    fontSize: "16px",
                                                }}
                                            >
                                                Medical Records
                                            </Typography>
                                            {consultationData.data.medicalRecords.map((record: any, index: number) => (
                                                <Box
                                                    key={index}
                                                    sx={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        padding: "12px",
                                                        backgroundColor: "#fff",
                                                        borderRadius: "8px",
                                                        marginBottom: "8px",
                                                        border: "1px solid #e2e8f0",
                                                    }}
                                                >
                                                    <IoDocument style={{ color: "#667eea", marginRight: "12px", fontSize: "24px" }} />
                                                    <Box sx={{ flex: 1 }}>
                                                        <Typography
                                                            sx={{
                                                                fontFamily: "'Poppins', sans-serif",
                                                                fontSize: "14px",
                                                                fontWeight: "500",
                                                            }}
                                                        >
                                                            {record.fileName}
                                                        </Typography>
                                                        <Typography
                                                            sx={{
                                                                fontFamily: "'Poppins', sans-serif",
                                                                fontSize: "12px",
                                                                color: "#718096",
                                                            }}
                                                        >
                                                            {new Date(record.uploadedAt).toLocaleDateString()}
                                                        </Typography>
                                                    </Box>
                                                    <Button
                                                        size="small"
                                                        onClick={() => handleDownloadPdf(record)}
                                                        sx={{
                                                            textTransform: "capitalize",
                                                            fontFamily: "'Poppins', sans-serif",
                                                            color: "#667eea",
                                                        }}
                                                    >
                                                        Download
                                                    </Button>
                                                </Box>
                                            ))}
                                        </Box>
                                    )}
                            </>
                        ) : (
                            <Box
                                sx={{
                                    padding: "40px",
                                    textAlign: "center",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: "16px",
                                        color: "#718096",
                                    }}
                                >
                                    No consultation data available yet
                                </Typography>
                            </Box>
                        )}
                    </>
                )}
            </DialogContent>

            <DialogActions sx={{ padding: "16px 24px" }}>
                <Button
                    onClick={onClose}
                    variant="contained"
                    sx={{
                        textTransform: "capitalize",
                        fontFamily: "'Poppins', sans-serif",
                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        "&:hover": {
                            background: "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
                        },
                    }}
                >
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ViewConsultationModal;
