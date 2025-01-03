var eudrReferences = new Ext.form.Panel({
    width: 800,
    height: 840,
    title: 'References',
    floating: true,
    closable: true,
    closeAction: 'hide',
    html: `
        <div id="pagination-content">
            <div class="page" id="page-1">
                <table class="table">
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Analysis Type </td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">
                        European Union Deforestation Free Regulation
                        </td>
                    </tr>
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Overview </td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">
                        The European Union Deforestation-free Regulation (EUDR) is a legislative initiative aimed at tackling deforestation and forest degradation
                        associated with the production of agricultural commodities. The regulation requires farmers to conduct due diligence to ensure that their
                        supply chains are free from deforestation and comply with sustainability standards. Deforestation map and analysis is needed to provide
                        valuable insights into areas where deforestation is occurring, allowing farmers to assess and mitigate the risks associated with their
                        supply chains. In this analysis, we use reliable deforestation maps from Global Forest Watch (GFW), European Union Joint Research Committee
                        (EU JRC), and Science Based Target Network (SBTN), combined with farmers plot polygon to see if the farmers plot is indicated to cause a
                        deforestation or not, ensuring their compliance to EUDR.</td>
                    </tr>
                </table>
                <div style="font-size: 14px;font-weight: bold;margin-left:10px;font-weight: 500;">Polygon Overlay with Forest Cover and Tree Cover Loss</div>
                <table class="table">
                    <tr>
                        <td colspan="2" class="image-container">
                            <img src="<?=$_SERVER["AWS_S3_CDN_ASSETS"];?>images/icons/maps/Polygon1.png" alt="Polygon Overlay 1">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="image-container">
                            <img src="<?=$_SERVER["AWS_S3_CDN_ASSETS"];?>images/icons/maps/Polygon2.png" alt="Polygon Overlay 1">
                        </td>
                    </tr>
                </table>
            </div>
            <div class="page" id="page-2" style="display:none;">
                <div style="font-size: 16px;font-weight: bold;margin-left: 10px;margin-top: 10px;font-weight: 500;">Forest Source: Cover Comparison Detail</div>
                <div style="font-size: 14px;font-weight: bold;margin-left:10px;font-weight: 500;">1. Source: Global Forest Watch (GFW) Primary Humid Tropical Forest</div>
                <table class="table">
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Classification Type</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">Binary​</td>
                    </tr>
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Classification</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">Primary Humid Tropical Forest​</td>
                    </tr>
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Attributes and Descriptions</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">Intact tropical forest ecosystems that have not been significantly altered by human activities, characterized by high biodiversity, carbon storage, and essential ecosystem functions.​</td>
                    </tr>
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">How Guidance Informed Proxy</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">Identified primary humid tropical forests based on continuous tree cover in tropical regions, using remote sensing to detect undisturbed forest ecosystems. This dataset focuses on areas with minimal human impact and intact ecosystems.​</td>
                    </tr>
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Limitations of Proxy</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">Difficult to assess areas with minor human activities or forest degradation that does not fully remove tree cover. May miss small-scale disturbances or secondary regrowth that resembles primary forests.​</td>
                    </tr>
                </table>
                <div style="font-size: 14px;font-weight: bold;margin-left:10px;font-weight: 500;;">2. Source: EC JRC Global Map of Forest Cover 2020, V1.</div>
                <table class="table">
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Classification Type</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">Binary​</td>
                    </tr>
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Classification</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">Global Forest Cover​</td>
                    </tr>
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Attributes and Descriptions</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">A binary classification of forest (tree cover >30%) and non-forest land cover, based on satellite imagery from 2020. Provides a global perspective of tree cover distribution across all types of forests.​</td>
                    </tr>
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">How Guidance Informed Proxy</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">Mapped forest cover globally using a simple threshold (tree cover >30%) to distinguish between forested and non-forested areas. Used as a baseline to identify overall forested areas, not necessarily distinguishing forest types or management levels.​</td>
                    </tr>
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Limitations of Proxy</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">Does not differentiate between forest types (e.g., primary, secondary, or plantations). Simple thresholding can misclassify sparse forests or areas with canopy gaps. Provides no information on forest management or ecosystem health.​</td>
                    </tr>
                </table>
            </div>
            <div class="page" id="page-3" style="display:none;">
                <div style="font-size: 16px;font-weight: bold;margin-left: 10px;margin-top: 10px;font-weight: 500;">Forest Source: Cover Comparison Detail</div>
                <div style="font-size: 14px;font-weight: bold;margin-left:10px;font-weight: 500;">3. Source: SBTN</div>
                <table class="table">
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Classification Type</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">Natural Forest - Divided into Various Types​</td>
                    </tr>
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Classification</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">
                            <ul>
                                <li>Unmanaged or minimally managed natural forest</li>
                                <li>Managed Natural Forest</li>
                                <li>Regenerated Natural Forest</li>
                                <li>Non-permanent or Low-Intensity Cultivation within a Natural Forest</li>
                            </ul>
                        ​</td>
                    </tr>
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Attributes and Descriptions</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">
                            <ul>
                                <li>Unmanaged or minimally managed natural forest, with some human impacts. Includes some forest characteristics that cannot be mapped remotely.</li>
                                <li>Forests managed for harvest/services, maintaining ecosystem integrity. May include selectively harvested areas.</li>
                                <li>Forests regrown after disturbance, resembling native forests. Includes abandoned agricultural lands or managed native species restoration.</li>
                                <li>Low-intensity or swidden cultivation that retains the forest's structure and species. Includes agroforestry under forest canopy.</li>
                            </ul>
                        ​</td>
                    </tr>
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">How Guidance Informed Proxy</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">
                            <ul>
                                <li>Used tree cover height (>5m) and area (>0.5 ha) as indicators. Excluded plantations, tree crops, and planted forests. Regional data descriptions of 'natural,' 'native,' or 'secondary' were used.</li>
                                <li>N/A</li>
                                <li>N/A</li>
                                <li>N/A</li>
                            </ul>
                        ​</td>
                    </tr>
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Limitations of Proxy</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">
                            <ul>
                                <li>Regional data may lack height or canopy density thresholds. Inaccurate classification of areas such as tree crops, plantations, or degraded forests.</li>
                                <li>Same as above; managed and selectively harvested forests could be misclassified.</li>
                                <li>N/A</li>
                                <li>May include agroforestry or shifting cultivation areas where data is insufficient for differentiation.</li>
                            </ul>
                        ​</td>
                    </tr>
                </table>
            </div>
            <div class="page" id="page-4" style="display:none;">
                <div style="font-size: 16px;font-weight: bold;margin-left: 10px;margin-top: 10px;font-weight: 500;">Change Detection: Tree Cover Loss Source</div>
                <div style="font-size: 14px;font-weight: bold;margin-left:10px;font-weight: 500;">A. Feature: GFW GLAD-L (Landsat-based)</div>
                <table class="table">
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Data Source</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">Landsat (Optical)​</td>
                    </tr>
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Resolution</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">
                            30 meters
                        ​</td>
                    </tr>
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Geographic Focus</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">
                            Global (especially tropics)
                        ​</td>
                    </tr>
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Detection Type</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">
                            Large-scale deforestation
                        ​</td>
                    </tr>
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Update Frequency</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">
                            Bi-weekly to monthly
                        ​</td>
                    </tr>
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Weather Independence</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">
                            Limited by clouds and daylight
                        ​</td>
                    </tr>
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Capabilities</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">
                            Detects large-scale deforestation. Limited in capturing fine-grained changes.
                        ​</td>
                    </tr>
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Integration</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">
                            Integrated into Global Forest Watch.
                        ​</td>
                    </tr>
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Advantages</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">
                            Long-term data availability. Global coverage. Cost-effective for large-scale monitoring.
                        ​</td>
                    </tr>
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Limitations</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">
                            Limited by weather conditions and daylight. Coarser resolution for small-scale changes.
                        ​</td>
                    </tr>
                </table>
            </div>
            <div class="page" id="page-5" style="display:none;">
                <div style="font-size: 16px;font-weight: bold;margin-left: 10px;margin-top: 10px;font-weight: 500;">Change Detection: Tree Cover Loss Source</div>
                <div style="font-size: 14px;font-weight: bold;margin-left:10px;font-weight: 500;">B. Feature: Koltiva GLAD-S2 (Sentinel-2-based)</div>
                <table class="table">
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Data Source</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">Sentinel-2 (Optical)​</td>
                    </tr>
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Resolution</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">
                            10 meters
                        ​</td>
                    </tr>
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Geographic Focus</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">
                            Tropical regions (e.g., Amazon Basin)
                        ​</td>
                    </tr>
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Detection Type</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">
                            Small-scale and fine-grained disturbances
                        ​</td>
                    </tr>
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Update Frequency</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">
                            Weekly to bi-weekly
                        ​</td>
                    </tr>
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Weather Independence</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">
                            Limited by clouds and daylight
                        ​</td>
                    </tr>
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Capabilities</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">
                            Detects small-scale disturbances with finer resolution.
                        ​</td>
                    </tr>
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Integration</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">
                            Integrated into Global Forest Watch.
                        ​</td>
                    </tr>
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Advantages</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">
                            High resolution for small-scale disturbances. Detailed monitoring in tropical regions.
                        ​</td>
                    </tr>
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Limitations</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">
                            Limited to tropical regions. Subject to weather and daylight constraints.
                        ​</td>
                    </tr>
                </table>
            </div>
            <div class="page" id="page-6" style="display:none;">
                <div style="font-size: 16px;font-weight: bold;margin-left: 10px;margin-top: 10px;font-weight: 500;">Change Detection: Tree Cover Loss Source</div>
                <div style="font-size: 14px;font-weight: bold;margin-left:10px;font-weight: 400;color: #5E5E5E;">Forest cover sources provide a static snapshot of forested areas at a specific point in time, such as the 2020 JRC dataset, making them ideal for establishing baseline forest extent and conducting general ecosystem assessments. However, their static nature means they cannot capture recent deforestation, regrowth, or dynamic changes, leading to potential gaps in monitoring. In contrast, change detection sources focus on tracking tree cover loss and forest disturbances over time, with updates ranging from weekly to bi-weekly.</div>
                <div style="font-size: 14px;font-weight: bold;margin-left:10px;font-weight: 500;">A. GFW Forest Cover</div>
                <table class="table">
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Forest Cover Source</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">GFW – GLAD: Primary Humid Tropical Forests​</td>
                    </tr>
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Change Detection Source</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">
                            -
                        ​</td>
                    </tr>
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Use Case</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">
                            Focuses on identifying intact tropical forests with minimal human impact. However, without change detection, it risks false negatives by failing to capture ongoing or recent deforestation activities.
                        ​</td>
                    </tr>
                </table>
                <div style="font-size: 14px;font-weight: bold;margin-left:10px;font-weight: 500;">B. JRC Forest Cover</div>
                <table class="table">
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Forest Cover Source</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">JRC: Forest Cover 2020​</td>
                    </tr>
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Change Detection Source</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">
                            -
                        ​</td>
                    </tr>
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Use Case</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">
                            Provides a global baseline of forested areas (tree cover >30%). Lacks the ability to detect deforestation post-2020, increasing false negatives for recent or small-scale disturbances.
                        ​</td>
                    </tr>
                </table>
            </div>
            <div class="page" id="page-7" style="display:none;">
                <div style="font-size: 16px;font-weight: bold;margin-left: 10px;margin-top: 10px;font-weight: 500;">Change Detection: Tree Cover Loss Source</div>
                <div style="font-size: 14px;font-weight: bold;margin-left:10px;font-weight: 500;">C. SBTN Forest Cover</div>
                <table class="table">
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Forest Cover Source</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">SBTN: Natural Forest Cover 2020​</td>
                    </tr>
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Change Detection Source</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">
                            -
                        ​</td>
                    </tr>
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Use Case</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">
                            Suitable for mapping unmanaged, managed, and regenerated forests. Without change detection, cannot account for ongoing deforestation or small-scale degradation, leading to potential false negatives.
                        ​</td>
                    </tr>
                </table>
                <div style="font-size: 14px;font-weight: bold;margin-left:10px;font-weight: 500;">D. Koltiva 1: GFW Forest Cover with Change Detection</div>
                <table class="table">
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Forest Cover Source</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">GFW – GLAD: Primary Humid Tropical Forests​</td>
                    </tr>
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Change Detection Source</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">
                            Hansen GLAD-L (Landsat-based, 30 meters)
                        ​</td>
                    </tr>
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Use Case</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">
                            Ideal for large-scale deforestation monitoring in tropical forests. Combines forest cover with Landsat-based change detection, providing a broad but coarse view of deforestation dynamics.
                        ​</td>
                    </tr>
                </table>
                <div style="font-size: 14px;font-weight: bold;margin-left:10px;font-weight: 500;">E. Koltiva 2: SBTN Forest Cover with Change Detection</div>
                <table class="table">
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Forest Cover Source</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">SBTN: Natural Forest Cover 2020​</td>
                    </tr>
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Change Detection Source</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">
                            Koltiva GLAD-S2 (Sentinel-2-based, 10 meters)
                        ​</td>
                    </tr>
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Use Case</td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">
                            High-resolution monitoring of small-scale changes in natural forests. Combines SBTN's forest classification with Sentinel-2 change detection, suitable for compliance in regions with dynamic land-use.
                        ​</td>
                    </tr>
                </table>
            </div>
            <div class="page" id="page-8" style="display:none;">
                <table class="table">
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;">Date of Content </td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">2001 – 2021</td>
                    </tr>                    
                    <tr>
                        <td style="width:20%;font-weight: 500;font-size: 14px;line-height: 19px;vertical-align: top;">Reference </td>
                        <td style="font-weight: 400;font-size: 14px;line-height: 16px;">
                        <ol style="list-style: lower-alpha;">
                        <li style="margin-bottom: 10px;">
                        Hansen, M. C., P. V. Potapov, R. Moore, M. Hancher, S. A. Turubanova, A. Tyukavina, D. Thau, S. V. Stehman, S. J. Goetz, T. R. Loveland, A.
                        Kommareddy, A. Egorov, L. Chini, C. O. Justice, and J. R. G. Townshend. 2013. “High-Resolution Global Maps of 21st-Century Forest Cover Change.”
                        Science 342 (15 November): 850–53
                        </li>
                        <li style="margin-bottom: 10px;">
                        Bourgoin, C., Ameztoy, I., Verhegghen, A., Desclée, B., Carboni, S., Bastin, J., Beuchle, R., Brink, A., Defourny, P., Delhez, B., Fritz, S., Gond, V., Herold, M., Lamarche, C., Mansuy, N., Mollicone, D., Oom, D., Peedell, S., San-Miguel, J., Colditz, R. and Achard, F., Mapping Global Forest Cover of the Year 2020 to Support the EU Regulation on Deforestation-free Supply Chains, Publications Office of the European Union, Luxembourg, 2024
                        </li>
                        <li style="margin-bottom: 10px;">
                        Mazur E, Sims M, Goldman E, Schneider M, Stolle F, Pirri MD, Beatty CR. 2023. Science Based Targets for Land Version 0.3 – Supplementary Material SBTN Natural Lands Map: Technical Documentation. Science Based Targets Network Global Common Alliance
                        </li>
                        <li style="margin-bottom: 10px;">
                        Zhu*, Z. and Woodcock, C. E. Continuous change detection and classification of land cover using all available data. Remote Sensing. 2014; 10(5):144. <a target="_blank" href="http://dx.doi.org/10.1016/j.rse.2014.01.011">http://dx.doi.org/10.1016/j.rse.2014.01.011.</a> </li>
                        </ol>  
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="fixed-bottom">
            <div id="pagination-controls" style="text-align: center; margin-top: 10px;">
                <button class="pagination-arrow" onclick="prevPage()" id="prevArrow">&lsaquo;</button>
                <button class="pagination-btn active" onclick="goToPage(1)">1</button>
                <button class="pagination-btn" onclick="goToPage(2)">2</button>
                <button class="pagination-btn" onclick="goToPage(3)">3</button>
                <button class="pagination-btn" onclick="goToPage(4)">4</button>
                <button class="pagination-btn" onclick="goToPage(5)">5</button>
                <button class="pagination-btn" onclick="goToPage(6)">6</button>
                <button class="pagination-btn" onclick="goToPage(7)">7</button>
                <button class="pagination-btn" onclick="goToPage(8)">8</button>
                <button class="pagination-arrow" onclick="nextPage()" id="nextArrow">&rsaquo;</button>
            </div>
            <button class="btn btn-default" style="float: right;margin-right: 20px;padding: 8px 36px;background: #DEF6CC;border: 1px solid #319C4C;
            border-radius: 4px;color: #319C4C;font-weight: 500;font-size: 14px;line-height: 16px;" onclick="eudrReferences.hide()">Close</button>
            <a target="_blank" href="https://supplychaintrace-koltitrace.s3.ap-southeast-1.amazonaws.com/app/documents/eudr_dd/template_eudr_guide/EUDR_Deforestation_Reference_Guide.pdf" download="EUDR_Deforestation_Reference_Guide.pdf" class="btn btn-default" style="float: right; margin-right: 20px; padding: 8px 36px; background: #DEF6CC; border: 1px solid ##8e9c31; border-radius: 4px; color: #8e9c31; font-weight: 500; font-size: 14px; line-height: 16px;">Download</a>
        </div>
        `,
    style: 'box-shadow: 0px 2px 8px rgba(18, 18, 18, 0.12); border-radius: 15px;',
});

// Pagination Start
let currentPage = 1;
const totalPages = 8;

function showPage(page) {
    document.querySelectorAll('.page').forEach((el, index) => {
        el.style.display = (index + 1 === page) ? 'block' : 'none';
    });
    updatePaginationButtons(page);
    updateArrowSymbols();
}

function goToPage(page) {
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        showPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
}

function updatePaginationButtons(activePage) {
    document.querySelectorAll('.pagination-btn').forEach((btn, index) => {
        if (index + 1 === activePage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function updateArrowSymbols() {
    const prevArrow = document.getElementById('prevArrow');
    const nextArrow = document.getElementById('nextArrow');

    if (currentPage === 1) {
        prevArrow.innerHTML = '-';
        prevArrow.style.cursor = 'default';
    } else {
        prevArrow.innerHTML = '&lsaquo;';
        prevArrow.style.cursor = 'pointer';
    }

    if (currentPage === totalPages) {
        nextArrow.innerHTML = '-';
        nextArrow.style.cursor = 'default';
    } else {
        nextArrow.innerHTML = '&rsaquo;';
        nextArrow.style.cursor = 'pointer';
    }
}
showPage(currentPage);
// Pagination End