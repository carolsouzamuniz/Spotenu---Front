import React from 'react';
import { Card, Typography, CardContent, List } from '@material-ui/core';

const BandList = () => {
    return <Card>
        <CardContent>
            <Typography  variant="h5" color="textSecondary" gutterBottom>
                Lista de bandas
            </Typography>
            <List>
                {/* {props.candidates.map((candidate) => {
                    return <CandidateItem 
                        candidate={candidate} 
                        decideCandidate={props.decideCandidate}
                    />
                })} */}
            </List>
        </CardContent>
    </Card>
    
}