import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

function AlbumCard() {
  return (
    <Card className="py-4">
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl min-w-full min-h-full"
          src="https://nextui.org/images/hero-card-complete.jpeg"
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large text-center">Frontend Radio</h4>
      </CardHeader>
    </Card>
  )
}

export default AlbumCard