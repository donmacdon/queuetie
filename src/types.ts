import { Restaurant, Branch, Reservation } from "@prisma/client"

export type RestaurantWithBranchesWithReservations = Restaurant & {
    branch: (Branch & { reservation: Reservation })[]
}
