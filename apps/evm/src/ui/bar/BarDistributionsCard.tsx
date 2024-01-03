import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@sushiswap/ui'
import { HistoricDistributionDataTable } from './HistoricDistributionDataTable'
import { UpcomingDistributionDataTable } from './UpcomingDistributionDataTable'

export const BarDistributionsCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Distribution</CardTitle>
        <CardDescription>
          Each trading pair on SushiSwap has its own reserve of the 0.05% of
          trading fees. These fees are distributed to the community
          periodically.
        </CardDescription>
      </CardHeader>
      <Tabs className="w-full" defaultValue="upcoming">
        <CardContent>
          <TabsList className="!flex">
            <TabsTrigger value="upcoming" className="flex flex-1">
              Upcoming Distribution
            </TabsTrigger>
            <TabsTrigger value="historic" className="flex flex-1">
              History
            </TabsTrigger>
          </TabsList>
        </CardContent>
        <TabsContent value="upcoming">
          <UpcomingDistributionDataTable />
        </TabsContent>
        <TabsContent value="historic">
          <HistoricDistributionDataTable />
        </TabsContent>
      </Tabs>
    </Card>
  )
}
