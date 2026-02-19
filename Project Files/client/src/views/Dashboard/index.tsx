// React Imports
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// Utils
import {
  convertToAMPMFormat,
  maskingPhoneNumber,
  thousandSeparatorNumber,
} from "../../utils";
// React Icons
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { CiMoneyCheck1 } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { IoChatbubblesOutline } from "react-icons/io5";
// MUI Imports
import { Box, Grid, Divider, Button } from "@mui/material";
// Custom Imports
import { Heading } from "../../components/Heading";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useGetApprovedDoctorsQuery } from "../../redux/api/doctorSlice";
import { useGetOrCreateConversationMutation } from "../../redux/api/chatApiSlice";
import OverlayLoader from "../../components/Spinner/OverlayLoader";
import useTypedSelector from "../../hooks/useTypedSelector";
import { userIsDoctor, userIsAdmin } from "../../redux/auth/authSlice";

const Dashboard = () => {
  const navigate = useNavigate();
  const isDoctor = useTypedSelector(userIsDoctor);
  const isAdmin = useTypedSelector(userIsAdmin);
  const { data, isLoading } = useGetApprovedDoctorsQuery({});
  const [getOrCreateConversation, { isLoading: chatLoading }] = useGetOrCreateConversationMutation();
  const [loadingDoctorId, setLoadingDoctorId] = useState<string | null>(null);

  const handleStartChat = async (doctorId: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click
    try {
      setLoadingDoctorId(doctorId);
      const result: any = await getOrCreateConversation({ doctorId });

      if (result?.data?.data?._id) {
        // Navigate to chat with the conversation ID
        navigate('/chat', { state: { conversationId: result.data.data._id } });
      }
    } catch (error) {
      console.error("Error starting chat:", error);
    } finally {
      setLoadingDoctorId(null);
    }
  };

  return (
    <>
      {isLoading && <OverlayLoader />}
      <Navbar>
        <Heading>Available Doctors</Heading>
        {data?.data?.length !== 0 && !isDoctor && (
          <Heading sx={{ margin: "10px 0", fontSize: "14px", fontWeight: 500 }}>
            Select Doctor to add Appointments
          </Heading>
        )}
        {data?.data?.length !== 0 && isDoctor && (
          <Heading sx={{ margin: "10px 0", fontSize: "14px", fontWeight: 500 }}>
            View all doctors in the clinic
          </Heading>
        )}

        <Box>
          <Grid container rowSpacing={2} columnSpacing={4}>
            {data?.data?.length === 0 ? (
              <Box
                sx={{
                  margin: "30px 0 20px 0",
                  background: "#fff",
                  borderRadius: "6px",
                  padding: "15px 20px",
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 10px",
                }}
              >
                No Doctors Available in this Clinic
              </Box>
            ) : (
              <>
                {data?.data?.map((row: any, index: number) => {
                  return (
                    <Grid item xs={12} sm={6} md={4} key={row?.userId || index}>
                      <Box
                        sx={{
                          margin: "20px 0",
                          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                          borderRadius: "16px",
                          padding: "20px 24px",
                          boxShadow: "0 8px 32px 0 rgba(102, 126, 234, 0.37)",
                          transition: "all 0.3s ease",
                          border: "2px solid transparent",
                          "&:hover": {
                            transform: "translateY(-5px)",
                            boxShadow: "0 12px 40px 0 rgba(102, 126, 234, 0.5)",
                            border: "2px solid rgba(255, 255, 255, 0.3)",
                          },
                        }}
                      >
                        <Heading
                          sx={{
                            margin: "5px 0",
                            fontSize: "20px",
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: "600",
                            color: "#fff",
                          }}
                        >
                          {`${row?.prefix} ${row?.fullName}`}
                          <Box sx={{ fontSize: "14px", fontWeight: "400", color: "rgba(255, 255, 255, 0.9)" }}>
                            {`(${row?.specialization})`}
                          </Box>
                        </Heading>
                        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.2)", margin: "12px 0" }} />
                        <Box
                          sx={{
                            margin: "15px 0 10px 0",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            sx={{
                              minWidth: "180px",
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                              fontFamily: "'Poppins', sans-serif",
                              fontWeight: "500",
                              color: "#fff",
                            }}
                          >
                            <IoPhonePortraitOutline style={{ fontSize: "18px" }} />
                            Phone Number
                          </Box>
                          <Box sx={{ fontFamily: "'Poppins', sans-serif", color: "rgba(255, 255, 255, 0.9)" }}>
                            {maskingPhoneNumber(row?.phoneNumber)}
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            margin: "15px 0 10px 0",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            sx={{
                              minWidth: "180px",
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                              fontFamily: "'Poppins', sans-serif",
                              fontWeight: "500",
                              color: "#fff",
                            }}
                          >
                            <CiLocationOn style={{ fontSize: "18px" }} />
                            Address
                          </Box>
                          <Box sx={{ fontFamily: "'Poppins', sans-serif", color: "rgba(255, 255, 255, 0.9)" }}>
                            {row?.address}
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            margin: "15px 0 10px 0",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            sx={{
                              minWidth: "180px",
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                              fontFamily: "'Poppins', sans-serif",
                              fontWeight: "500",
                              color: "#fff",
                            }}
                          >
                            <CiMoneyCheck1 style={{ fontSize: "18px" }} /> Fee Per Visit
                          </Box>
                          <Box sx={{ fontFamily: "'Poppins', sans-serif", color: "rgba(255, 255, 255, 0.9)" }}>
                            {thousandSeparatorNumber(row?.feePerConsultation)}
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            margin: "15px 0 10px 0",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            sx={{
                              minWidth: "180px",
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                              fontFamily: "'Poppins', sans-serif",
                              fontWeight: "500",
                              color: "#fff",
                            }}
                          >
                            <IoMdTime style={{ fontSize: "18px" }} />
                            Timings
                          </Box>
                          <Box sx={{ fontFamily: "'Poppins', sans-serif", color: "rgba(255, 255, 255, 0.9)" }}>
                            {`${convertToAMPMFormat(
                              row?.fromTime
                            )} to ${convertToAMPMFormat(row?.toTime)}`}
                          </Box>
                        </Box>

                        {/* Action Buttons */}
                        {!isDoctor && !isAdmin && (
                          <>
                            <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.2)", margin: "16px 0 12px 0" }} />
                            <Box sx={{ display: "flex", gap: 2 }}>
                              <Button
                                variant="contained"
                                onClick={(e) => handleStartChat(row?.userId, e)}
                                disabled={loadingDoctorId === row?.userId}
                                sx={{
                                  flex: 1,
                                  background: "rgba(255, 255, 255, 0.2)",
                                  backdropFilter: "blur(10px)",
                                  color: "#fff",
                                  fontFamily: "'Poppins', sans-serif",
                                  fontWeight: "600",
                                  textTransform: "none",
                                  borderRadius: "10px",
                                  padding: "10px 20px",
                                  border: "1px solid rgba(255, 255, 255, 0.3)",
                                  "&:hover": {
                                    background: "rgba(255, 255, 255, 0.3)",
                                    transform: "translateY(-2px)",
                                  },
                                  transition: "all 0.3s ease",
                                }}
                                startIcon={<IoChatbubblesOutline />}
                              >
                                {loadingDoctorId === row?.userId ? "Starting..." : "Chat"}
                              </Button>
                              <Button
                                variant="contained"
                                onClick={() => navigate(`/book-appointments/${row?.userId}`)}
                                sx={{
                                  flex: 1,
                                  background: "#fff",
                                  color: "#667eea",
                                  fontFamily: "'Poppins', sans-serif",
                                  fontWeight: "600",
                                  textTransform: "none",
                                  borderRadius: "10px",
                                  padding: "10px 20px",
                                  "&:hover": {
                                    background: "rgba(255, 255, 255, 0.9)",
                                    transform: "translateY(-2px)",
                                  },
                                  transition: "all 0.3s ease",
                                }}
                              >
                                Book Appointment
                              </Button>
                            </Box>
                          </>
                        )}
                      </Box>
                    </Grid>
                  );
                })}
              </>
            )}
          </Grid>
        </Box>
      </Navbar>
      <Footer />
    </>
  );
};

export default Dashboard;
