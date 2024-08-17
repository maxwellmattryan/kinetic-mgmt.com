export async function GET() {
	return new Response(`
        <?xml version="1.0" encoding="UTF-8" ?>

        <!-- CAUTION: The information in here needs to be changed every time that any content titles or names used in the uri changes,
        the information in here has to be consistent to have proper SEO optimization -->
        
        <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
            <!-- Static URLs -->
            <url>
                <loc>https://kinetic-mgmt.com</loc>
                <priority>1.0</priority>
            </url>
            <url>
                <loc>https://kinetic-mgmt.com/artists</loc>
                <priority>0.7</priority>
            </url>
            <url>
                <loc>https://kinetic-mgmt.com/contact</loc>
                <priority>0.7</priority>
            </url>
            <url>
                <loc>https://kinetic-mgmt.com/artists/apellum</loc>
                <priority>0.5</priority>
            </url>
            <url>
                <loc>https://kinetic-mgmt.com/artists/natch-nadjafi</loc>
                <priority>0.5</priority>
            </url>
        </urlset>
    `)
}
