import { Card, CardBody, HStack, Heading, Image, Skeleton, SkeletonText } from "@chakra-ui/react";

export default function CardSkeleton() {
    return (
        <Card>
            <Skeleton height='200px'/>
            <CardBody>
               <SkeletonText/>
            </CardBody>
        </Card>
    )
}