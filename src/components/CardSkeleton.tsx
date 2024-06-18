import { Card, CardBody, HStack, Heading, Image, Skeleton, SkeletonText } from "@chakra-ui/react";

export default function CardSkeleton() {
    return (
        <Card width='250px' borderRadius={5} overflow="hidden">
            <Skeleton height='200px'/>
            <CardBody>
               <SkeletonText/>
            </CardBody>
        </Card>
    )
}