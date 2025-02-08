'use client';

interface Announcement {
	id: number;
	title: string;
	description: string;
	date: Date;
}

interface AnnouncementsClientProps {
	data: Announcement[];
}

const AnnouncementsClient: React.FC<AnnouncementsClientProps> = ({ data }) => {
	return (
		<div className="bg-white p-4 rounded-md">
			<div className="flex items-center justify-between">
				<h1 className="text-xl font-semibold">Announcements</h1>
				<span className="text-xs text-gray-400">View All</span>
			</div>
			<div className="flex flex-col gap-4 mt-4">
				{data.map((announcement, index) => (
					<div
						key={announcement.id}
						className={`rounded-md p-4 ${
							index === 0
								? 'bg-smsSkyLight'
								: index === 1
								? 'bg-smsPurpleLight'
								: 'bg-smsYellowLight'
						}`}
					>
						<div className="flex items-center justify-between">
							<h2 className="font-medium">{announcement.title}</h2>
							<span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
								{new Intl.DateTimeFormat('en-GB').format(new Date(announcement.date))}
							</span>
						</div>
						<p className="text-sm text-gray-400 mt-1">{announcement.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default AnnouncementsClient;
