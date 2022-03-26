import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const TableOngkir = ({ costs }) => {

    return (
        <>
            {costs.map((courir) => {
                const costs = courir[0].costs;
                return (
                    <Accordion
                        elevation={2}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            id="panel1a-header"
                        >
                            <Typography sx={{ fontWeight: 'bold' }}>{courir[0].name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Table size="medium" aria-label="Ongkir">
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ fontWeight: 550 }}>Servis</TableCell>
                                        <TableCell align="right" sx={{ fontWeight: 550 }}>Harga</TableCell>
                                        <TableCell align="right" sx={{ fontWeight: 550 }}>Estimasi</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {costs.map((cost) => {
                                    const value = cost.cost[0].value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                                    const estimated = cost.cost[0].etd.split(" ");
                                    return (
                                        <TableRow hover key={cost.service}>
                                            <TableCell component="th" scope="row">
                                                {cost.description} ({cost.service})
                                            </TableCell>
                                            <TableCell align="right">{`Rp ${value}`}</TableCell>
                                            <TableCell align="right">{`${estimated[0]} Hari`}</TableCell>
                                        </TableRow>
                                    )})}
                                </TableBody>
                            </Table>
                        </AccordionDetails>
                    </Accordion>
                )
            })}
        </>
    )
}

export default TableOngkir;